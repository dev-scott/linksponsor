import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

 const Layout = ({children}:{children:React.ReactNode})=>{

    return (
        <div className="">
             <Navbar />
<div className="px-6 ">

            {children}
</div>

            <Footer/>
        </div>
    )
}

export default Layout