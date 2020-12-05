import Cookies from 'cookies';

function Dashboard() {
  return (
    <h1>Dashboard</h1>
  )
}

export async function getServerSideProps(ctx) {
  const cookies = new Cookies(ctx.req, ctx.res)
  console.log(cookies.get('myCookieName'));

  return { props: {  } }
}

export default Dashboard;
