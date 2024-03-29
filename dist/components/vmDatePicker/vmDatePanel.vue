<template>
  <div
    :class="classes"
    @mousedown.prevent>
    <div
      v-if="shortcuts.length"
      :class="[prefixCls + '-sidebar']">
      <div
        v-for="shortcut in shortcuts"
        :class="[prefixCls + '-shortcut']"
        @click="handleShortcutClick(shortcut)">{{ shortcut.text }}</div>
    </div>
    <div :class="[prefixCls + '-body']">
      <div
        v-show="currentView !== 'time'"
        :class="[datePrefixCls + '-header']">
        <span
          :class="iconBtnCls('prev', '-double')"
          @click="changeYear(-1)">
          <vm-icon
            :icon-pack="iconPack"
            :icon="prevIconYear"></vm-icon>
        </span>
        <span
          v-if="pickerTable === 'date-table'"
          v-show="currentView === 'date'"
          :class="iconBtnCls('prev')"
          @click="changeMonth(-1)"><vm-icon
            :icon-pack="iconPack"
            :icon="prevIcon"></vm-icon></span>
        <date-panel-label
          :date-panel-label="datePanelLabel"
          :current-view="pickerTable.split('-').shift()"
          :date-prefix-cls="datePrefixCls"></date-panel-label>
        <span
          v-if="pickerTable === 'date-table'"
          v-show="currentView === 'date'"
          :class="iconBtnCls('next')"
          @click="changeMonth(+1)"><vm-icon
            :icon-pack="iconPack"
            :icon="nextIcon"></vm-icon></span>
        <span
          :class="iconBtnCls('next', '-double')"
          @click="changeYear(+1)"><vm-icon
            :icon-pack="iconPack"
            :icon="nextIconYear"></vm-icon></span>
      </div>
      <div :class="[prefixCls + '-content']">
        <component
          v-if="currentView !== 'time'"
          ref="pickerTable"
          :is="pickerTable"
          :table-date="panelDate"
          :show-week-numbers="showWeekNumbers"
          :week-start="weekStart"
          :value="dates"
          :selection-mode="selectionMode"
          :disabled-date="disabledDate"
          :focused-date="focusedDate"

          @on-pick="panelPickerHandlers"
          @on-pick-click="handlePickClick"
        ></component>
      </div>
      <div
        v-show="isTime"
        :class="[prefixCls + '-content']">
        <vm-time-panel
          v-if="currentView === 'time'"
          ref="timePicker"
          :value="dates"
          :format="format"
          :time-disabled="timeDisabled"
          :disabled-date="disabledDate"
          :focused-date="focusedDate"

          v-bind="timePickerOptions"
          @on-pick="handlePick"
          @on-pick-click="handlePickClick"
          @on-pick-clear="handlePickClear"
          @on-pick-success="handlePickSuccess"
          @on-pick-toggle-time="handleToggleTime"
        ></vm-time-panel>
      </div>
      <Confirm
        v-if="confirm"
        :show-time="showTime"
        :is-time="isTime"
        @on-pick-toggle-time="handleToggleTime"
        @on-pick-clear="handlePickClear"
        @on-pick-success="handlePickSuccess"
      ></Confirm>
    </div>
  </div>
</template>
<script>
    import DateTable from './base/date-table.vue';
    import YearTable from './base/year-table.vue';
    import MonthTable from './base/month-table.vue';
    import Confirm from './base/confirm.vue';
    import datePanelLabel from './base/date-panel-label.vue';

    import Mixin from './base/panel-mixin';
    import DateMixin from './base/date-panel-mixin';
    import Locale from '../../mixins/locale';

    import { siblingMonth, formatDateLabels } from './util';

    const prefixCls = 'vm-datepicker-panel';
    const datePrefixCls = 'vm-datepicker';

    export default {
      name: 'VmDatePanel',
      components: { DateTable, YearTable, MonthTable, Confirm, datePanelLabel },
      mixins: [ Mixin, Locale, DateMixin ],
      props: {
            // more props in the mixin
        multiple: {
          type: Boolean,
          default: false
        },
        prevIconYear:{
          type:String,
          default:'arrowhead-left-outline'
        },
        prevIcon:{
          type:String,
          default:'arrow-ios-back-outline'
        },
        nextIcon:{
          type:String,
          default:'arrow-ios-forward-outline'
        },
        nextIconYear:{
          type:String,
          default:'arrowhead-right-outline'
        },
        iconPack:{
          type:String,
          default:'eva'
        }
      },
      data () {
        const {selectionMode, value} = this;

        const dates = value.slice().sort();
        return {
          prefixCls: prefixCls,
          datePrefixCls: datePrefixCls,
          currentView: selectionMode || 'date',
          pickerTable: this.getTableType(selectionMode),
          dates: dates,
          panelDate: this.startDate || dates[0] || new Date()
        };
      },
      computed: {
        classes () {
          return [
            `${prefixCls}-body-wrapper`,
            {
              [`${prefixCls}-with-sidebar`]: this.shortcuts.length
            }
          ];
        },
        panelPickerHandlers(){
          return this.pickerTable === `${this.currentView}-table` ? this.handlePick : this.handlePreSelection;
        },
        datePanelLabel () {
          const locale = this.t('i.locale');
          const datePanelLabel = this.t('i.datepicker.datePanelLabel');
          const date = this.panelDate;
          const { labels, separator } = formatDateLabels(locale, datePanelLabel, date);

          const handler = type => {
            let t = this
            return () => t.pickerTable = this.getTableType(type);
          };

          return {
            separator: separator,
            labels: labels.map(obj => ((obj.handler = handler(obj.type)), obj))
          };
        },
        timeDisabled(){
          return !this.dates[0];
        }
      },
      watch: {
        value (newVal) {
          this.dates = newVal;
          const panelDate = this.multiple ? this.dates[this.dates.length - 1] : (this.startDate || this.dates[0]);
          this.panelDate = panelDate || new Date();
        },
        currentView (currentView) {
          this.$emit('on-selection-mode-change', currentView);

          if (this.currentView === 'time') {
            this.$nextTick(() => {
              const spinner = this.$refs.timePicker.$refs.timeSpinner;
              spinner.updateScroll();
            });
          }
        },
        selectionMode(type){
          this.currentView = type;
          this.pickerTable = this.getTableType(type);
        },
        focusedDate(date){
          const isDifferentYear = date.getFullYear() !== this.panelDate.getFullYear();
          const isDifferentMonth = isDifferentYear || date.getMonth() !== this.panelDate.getMonth();
          if (isDifferentYear || isDifferentMonth){
            if (!this.multiple) this.panelDate = date;
          }
        }
      },
      methods: {
        reset(){
          this.currentView = this.selectionMode;
          this.pickerTable = this.getTableType(this.currentView);
        },
        changeYear(dir){
          if (this.selectionMode === 'year' || this.pickerTable === 'year-table'){
            this.panelDate = new Date(this.panelDate.getFullYear() + dir * 10, 0, 1);
          } else {
            this.panelDate = siblingMonth(this.panelDate, dir * 12);
          }
        },
        getTableType(currentView){
          return currentView.match(/^time/) ? 'time-picker' : `${currentView}-table`;
        },
        changeMonth(dir){
          this.panelDate = siblingMonth(this.panelDate, dir);
        },
        handlePreSelection(value){
          this.panelDate = value;
          if (this.pickerTable === 'year-table') this.pickerTable = 'month-table';
          else this.pickerTable = this.getTableType(this.currentView);

        },
        handlePick (value, type) {
          const {selectionMode, panelDate} = this;
          if (selectionMode === 'year') value = new Date(value.getFullYear(), 0, 1);
          else if (selectionMode === 'month') value = new Date(panelDate.getFullYear(), value.getMonth(), 1);
          else value = new Date(value);

          this.dates = [value];
          this.$emit('on-pick', value, false, type || selectionMode);
        },
      },
    };
</script>
