import CustomToastContainer from './../Toast/CustomToastContainer'
import ProductCard from './../Cards/ProductCard'
import FeedbackCard from './../Cards/FeedbackCard'
import FeedbackForm from './../Cards/Forms/FeedbackForm'
import SuggestionCard from './../Cards/SuggestionCard'

function ShowInfo() {
    return (
        <div className="container mx-auto py-8">
            <CustomToastContainer />
            <ProductCard />
            <h2 className="text-3xl px-6 mt-[50px] lg:block sm:hidden">
                Similar Products
            </h2>
            <SuggestionCard />
            <FeedbackCard />
            <FeedbackForm />
        </div>
    )
}

export default ShowInfo
