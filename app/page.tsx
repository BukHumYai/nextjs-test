"use client"
import { IUser } from '@/types/IUser';
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect } from 'react'

type Props = {}

export default function page({}: Props) {
  const [data , setData] = React.useState<IUser[]>([]);

  const getData = async () => {
    const response = await axios.get<IUser[]>("https://663489e79bb0df2359a1d096.mockapi.io/api/v1/users")
    setData(response.data)
    console.log(response.data);
  }

  useEffect (()=>{
    getData();
  } , [])
  return (
    <>
      <table>
        <tbody>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
          {
            data.map((item) =>(
              <tr key={item.id}>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.phoneNumber}</td>
                <td>{item.email}</td>
                <td>
                  <Link href={`/${item.id}`}>
                    Details
                  </Link>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </>
  )
}