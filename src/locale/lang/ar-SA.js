import setLang from '../lang';

const lang = {
  i: {
    locale: 'ar-SA',
    select: {
      placeholder: 'إختيار',
      noMatch: 'لا يوجد تطابق في البيانات',
      loading: 'تحميل'
    },
    table: {
      noDataText: 'لا توجد بيانات',
      noFilteredDataText: 'لا توجد بيانات',
      confirmFilter: 'تأكيد',
      resetFilter: 'إعادة تعيين',
      clearFilter: 'الكل'
    },
    datepicker: {
      selectDate: 'إختر التاريخ',
      selectTime: 'إختر الوقت',
      startTime: 'وقت البداية',
      endTime: 'وقت النهاية',
      clear: 'إزالة',
      ok: 'حسنا',
      datePanelLabel: '[mmmm] [yyyy]',
      month: 'شهر',
      month1: 'يناير',
      month2: 'فبراير',
      month3: 'مارس',
      month4: 'آبريل',
      month5: 'مايو',
      month6: 'يونيو',
      month7: 'يوليو',
      month8: 'أغسطس',
      month9: 'سبتمبر',
      month10: 'اكتوبر',
      month11: 'نوفمبر',
      month12: 'ديسمبر',
      year: 'سنة',
      weekStartDay: '0',
      weeks: {
        sun: 'أحد',
        mon: 'إثنين',
        tue: 'ثلاثاء',
        wed: 'أربعاء',
        thu: 'خميس',
        fri: 'جمعة',
        sat: 'سبت'
      },
      months: {
        m1: 'Jan',
        m2: 'Feb',
        m3: 'Mar',
        m4: 'Apr',
        m5: 'May',
        m6: 'Jun',
        m7: 'Jul',
        m8: 'Aug',
        m9: 'Sep',
        m10: 'Oct',
        m11: 'Nov',
        m12: 'Dec'
      }
    },
    transfer: {
      titles: {
        source: 'المصدر',
        target: 'الهدف'
      },
      filterPlaceholder: 'إبحث هنا',
      notFoundText: 'لا يوجد'
    },
    modal: {
      okText: 'حسنا',
      cancelText: 'إلغاء'
    },
    poptip: {
      okText: 'حسنا',
      cancelText: 'إلغاء'
    },
    page: {
      prev: 'الصفحة السابقة',
      next: 'الصفحة التالية',
      total: 'المجموع',
      item: 'عنصر',
      items: 'عناصر',
      prev5: 'الخمس صفحات السابقة',
      next5: 'الخمس صفحات التالية',
      page: '/page',
      goto: 'الذهاب إلى',
      p: ''
    },
    rate: {
      star: 'نجمة',
      stars: 'نجوم'
    },
    time: {
      before: ' منذ',
      after: ' بعد',
      just: 'الآن',
      seconds: ' ثواني',
      minutes: ' دقائق',
      hours: ' ساعات',
      days: ' أيام'
    },
    tree: {
      emptyText: 'لا توجد بيانات'
    }
  }
};

setLang(lang);

export default lang;
