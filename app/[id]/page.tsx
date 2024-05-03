"use client"
import { IUser } from '@/types/IUser';
import axios from 'axios';
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

type Props = {}

export default function page({}: Props) {
    const param = useParams<{id : string}>();
    const [dataByid , setDataByid] = useState<IUser | null>(null);

    const getDataByid = async () => {
        const response = await axios.get(`https://663489e79bb0df2359a1d096.mockapi.io/api/v1/users/${param.id}`)
        setDataByid(response.data)
    }

    useEffect (() => {
        getDataByid()
    },[])
  return (
    <>
    <div style={{ margin:'10px'}}>
        <h2>Detail</h2>
        <label>First Name :</label>{dataByid?.firstName} <br />
        <label>Last Name :</label>{dataByid?.lastName} <br />
        <label>Phone Number :</label>{dataByid?.phoneNumber} <br />
        <label>Email :</label>{dataByid?.email} <br />

    </div>
    </>
  )
}