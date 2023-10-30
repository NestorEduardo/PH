import Banner from "../../components/banner/Banner"
import ArticleList from "../articles/ArticleList"

const BlogContainer = () => {
  return (
    <div className="flex flex-col w-full justify-center">
        <Banner
            image="/images/blog/blog-banner.png"
            title="Nuestro blog"
            description="Acentua tu belleza: consejos y tratamientos para lucir radiante"
            upperCaseTitle
            upperCaseDescription
            fontBoldDescription
        />
        <div className="bg-slate-200 flex flex-col pt-12 text-center">
            <ArticleList />
        </div>
    </div>
  )
}

export default BlogContainer