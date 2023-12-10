import {Layout} from "./Layout";
import {Link} from "react-router-dom";

export const ErrorContent = () => {
  return (
    <Layout title='Что-то пошло не так'>
      <Link replace to={'/'}>Вернитесь на главную страницу</Link>
    </Layout>
  );
};
