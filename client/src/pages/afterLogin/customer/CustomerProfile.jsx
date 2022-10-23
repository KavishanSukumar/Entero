
import CustomerHeader from '../../../components/header/CustomerHeader';
import CustomerSidebar from '../../../components/sidebar/CustomerSidebar';
import UserProfileImage from "../../../components/profile/UserProfileImage";
import CustomerProfileForms from '../../../components/profile/CustomerProfileForms';



function CustomerProfile(props) {
  const id=props.userid
  
  
  
  
  return (
    <div>
      <CustomerHeader  />
      <div className="flex">
        
        
        <CustomerSidebar />
        <div className="md:ml-[15%] lg:ml-[25%]  md:mt-8 px-8 ">
          <div className="flex flex-col  md:flex-row min-h-screen">
          {/*The image part with change and remove buttons */}
            <UserProfileImage  userid={id}/>


          {/* start of the division with the forms*/}
            <CustomerProfileForms userid={id} />
           {/*End of the forms part */}

            
        
          </div>
          
        
        </div>
      </div>
      
    </div> 
  )
}

export default CustomerProfile