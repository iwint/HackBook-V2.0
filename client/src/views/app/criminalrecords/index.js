import React, { useEffect, useState } from 'react';
import Layout from '../../../layouts/index';
import Tabulation from '../../../components/Table';
import fb from '../../../firebase';
import {getFirestore,getDocs,collection} from 'firebase/firestore'
import { async } from '@firebase/util';
function CriminalRecords() {

  const [data, setdata] = useState([
    {
      id:"",
      name:"",
      location:""
    }
  ])

  const db = getFirestore(fb);

  useEffect(() => {

    const getCriminals = async ()=>{
        try {
          const d = []
          const data =await getDocs(collection(db,"criminals"))
          data.forEach(e=>{
            d.push({id:e.id,...e.data()})
          })

        setdata(d)
          
        } catch (error) {
          console.log("Error",error);
          
        }

    }
    getCriminals()
    // setdata(data)
  },[data])
  


  return (
    <Layout>
      <Tabulation data={data} />;
    </Layout>
  );
}

export default CriminalRecords;
