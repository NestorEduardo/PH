import Title from "../../../../components/titles/Title"
import ArticleSwiper from "../../../articles/ArticleSwiper"

const RecentArticles = () => {
  return (
    <>
      <div className="w-full bg-slate-200 ">
        <div className="flex flex-col justify-center sm:container sm:m-auto py-4">
            <div className="my-6">
                <Title titleText={"Articulos mas recientes"} />
            </div>
            <ArticleSwiper limit={3} />
        </div>
      </div>
    </>
  )
}

export default RecentArticles