// import { apiUrl } from "@/environment/environment";

// export async function getEmployee(index, size) {
//     const response = await fetch(`${apiUrl}/Employee/search?pageIndex=${index }&pageSize=${size}`);
    
//     try {
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }

//         return await response.json();
//     } catch (error) {
//         console.error('Error fetching data:', error);
//         throw error;
//     }
// }   

// export {
//     getEmployee
// }