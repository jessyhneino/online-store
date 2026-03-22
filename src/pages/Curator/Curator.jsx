import ProductNarrative from "./components/ProductNarrative";
import ProductPage from "./components/ProductPage";
import TechnicalSpecifications from "./components/TechnicalSpecifications";
import VerifiedCurators from "./components/VerifiedCurators";

function Curator() {
    return(
        <>
        <ProductPage />
        <ProductNarrative />
        <TechnicalSpecifications />
        <VerifiedCurators />
        </>
    )

}
export default Curator;
