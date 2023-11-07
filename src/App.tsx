import routes from '@/routes/index';
import { useRoutes } from 'react-router-dom';

const App = () => {
  const element = useRoutes(routes);
  return <div>{element}</div>;
};

export default App;
