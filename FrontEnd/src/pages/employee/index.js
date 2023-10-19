// import { getEmployee } from '@/services/employee/employee.service';
// import React,{ useEffect, useState } from 'react';

// const Employee = () => {
//     const [data, setData] = useState();
//     const [pageCount, setPageCount] = useState(0);
//     const [currentPage, setCurrentPage] = useState(0);
//     const [limit, setLimit] = useState(5)

//     useEffect(() => {
//         const getData = async () => {
//             const getAllData = await getEmployee(0, limit);
//             setData(getAllData);
//             // setPageCount(Math.ceil(getAllData.total / limit));
//         };
//         getData();
//     }, [limit]); 

//     console.log(pageCount); 
//     return (    
//         <div>
//             <h1>Hello World</h1>   
//         </div>
//     );
// };

// export default Employee;