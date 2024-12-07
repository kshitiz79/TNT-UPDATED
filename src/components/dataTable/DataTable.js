"use client"
import React,{useState, useEffect} from 'react';
import { getUpcomingTrainings } from '@/data/api/Api';
import { UpcomingClassHeadings } from '@/data/api/Constants';

const DataTable = ({dataListType}) => {
    // console.log(dataListType,"list type")
    const [upcomingClasses, setupcomingClasses] = useState()
    const headings = UpcomingClassHeadings;

    const getUpcomingClasses = async () =>{
        const arr = await getUpcomingTrainings();
        setupcomingClasses(arr)
    }

    useEffect(()=>{
        // console.log(dataListType,"list type")
        if(dataListType === "upcoming-trainings") getUpcomingClasses()
    },[dataListType])

    return (
        <div className='container mx-auto my-5 data-table'>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            {headings && headings.length > 0 && headings.map((item, index) => (
                                    <th key={index} scope="col" className="px-6 py-3">
                                        {item.title}
                                    </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {upcomingClasses && upcomingClasses.length > 0 && upcomingClasses.map((item, index) => {
                            const tableRowItem = item;
                            return (
                                <tr key={index} className="table-row-item">
                                    {headings && headings.length > 0 && headings.map((item, index) => {
                                        var isLink = tableRowItem[item.columnName].includes("https://");
                                        var tableData = isLink ? <a href={tableRowItem[item.columnName]} className='btn btn-primary'>Click Here</a> : tableRowItem[item.columnName];
                                        return (
                                            <td key={index} scope="col" className="px-6 py-3 last:px-3 last:text-center">
                                                {tableData}
                                            </td>
                                        )
                                    })}
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DataTable;