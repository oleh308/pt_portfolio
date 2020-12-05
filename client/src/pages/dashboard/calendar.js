
import AdminNav from '../../components/adminnav';
import AdminContent from '../../components/admincontent';

function Calendar() {
  return (
    <div>
      <AdminNav selected={2} />
      <AdminContent />
    </div>
  )
}

export default Calendar;
