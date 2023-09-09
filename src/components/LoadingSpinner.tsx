import { AiOutlineLoading3Quarters } from "react-icons/ai"
const LoadingSpinner = () => {
  return (
    <button className="botao flex justify-center items-center">
      <AiOutlineLoading3Quarters className="animate-loading h-5 w-5 mr-3" />
      Processando...
    </button>
  )
}

export default LoadingSpinner
