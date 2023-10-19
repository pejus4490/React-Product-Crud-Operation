import { apiUrl } from "@/environment/environment";

    async function getProduct() {
        const response = await fetch(`${apiUrl}/Product`);
        
        try {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
      
          return await response.json();
        } catch (error) {
          console.error("Error fetching data:", error);
          throw error;
        }
      }

      async function GetAllCountry(){
        const responce = await fetch(`${apiUrl}/Country`);
        try{
            if(!responce.ok){
                return new Error('Network responce is not ok')
            }
            return await responce.json()
        }catch(error){
            console.log('Error fetching data : ',error);
            throw error;
        }
    }
    

    async function addProduct(data){
        console.log(data);
        try{
            const response = await fetch(`${apiUrl}/Product`,{
              method: 'POST',
              body:  data,
            });
      
          if (!response.ok) {
                  throw new Error("Network response was not ok");
                      }
            
                return await response.json();
                     } catch (error) {
                  console.error("Error fetching data:", error);
                  throw error;
                }
      
          }

          async function getSingleProduct(id) {
            try {
                const response = await fetch(`${apiUrl}/Product/${id}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
        
                return await response.json();
            } catch (error) {
                console.error('Error fetching data:', error);
                throw error;
            }
        }

        async function updateProduct(id, data) {

          try {
              const response = await fetch(`${apiUrl}/Product/${id}`, {
                  method: 'PUT',
                  body: data,
              });
      
              if (!response.ok) {
                  const responseBody =  response.text();
                  
              }
      
              return  response.json();
          } catch (error) {
              console.error('Error updating data:', error);
              throw error;
          }

          
      }


      async function deleteProduct(id) {
        try {
            const response = await fetch(`${apiUrl}/Product/${id}`, {
                method: 'DELETE',
            });
      
            if (!response.ok) {
                throw new Error(`Network response was not ok: `);
            }
      
            return true; // Return a success indicator or any relevant data
        } catch (error) {
            console.error('Error deleting Department:', error);
            throw error;
        }
      }
    
    export{
        getProduct,
        addProduct,
        GetAllCountry,
        getSingleProduct,
        updateProduct,
        deleteProduct
    }