import { articlesData } from '../../fakedb/articles/articlesData';
import Card from '../../components/cards/Card';


const ArticleList = () => {
  return (
    <>
        <div className="flex flex-wrap justify-center">
        {articlesData.map((article, i) => {
            return (
            <Card
                key={i}
                id={article.id}
                image={article.image}
                title={article.title}
                hasRoutePath={true}
                width='w-64'
                centerLink={true}
            />
            );
        })}
        </div>
    </>
  );
}

export default ArticleList