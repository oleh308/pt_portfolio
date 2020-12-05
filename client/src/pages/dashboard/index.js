import Cookies from 'cookies';

import AdminNav from '../../components/adminnav';
import AdminContent from '../../components/admincontent';

function Dashboard() {
  return (
    <div>
      <AdminNav selected={0} />
      <AdminContent />
    </div>
  )
}

export async function getServerSideProps(ctx) {
  const cookies = new Cookies(ctx.req, ctx.res)
  console.log(cookies.get('myCookieName'));

  return { props: {  } }
}

export default Dashboard;
