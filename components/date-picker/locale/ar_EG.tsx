import CalendarLocale from '../../rc-components/calendar/locale/ar_EG';
import TimePickerLocale from '../../time-picker/locale/ar_EG';

// Merge into a locale object
const locale = {
  lang: {
    placeholder: 'اختيار التاريخ',
    rangePlaceholder: ['البداية', 'النهاية'],
    ...CalendarLocale,
  },
  timePickerLocale: {
    ...TimePickerLocale,
  },
};

// All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json

export default locale;
