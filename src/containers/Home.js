import React,{useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import ListItem from '../components/ListItem'
const Home = () => {
    const [value,setValue] = useState({
        cons:[
            {
                id:uuidv4(),
                name:''
            }
        ],
        value:[
            {
                id:uuidv4(),
                name:''
            }
        ]
    });

    const [checkVal,setCheckVal] = useState(true);
    const [checkCons,setCheckCons] = useState(true);
    const handleChange=(id,version)=>(e)=>{
        const arr = [...value[version]];
        const elemIndex = arr.findIndex(obj=>obj.id===id);
        arr[elemIndex].name=e.target.value;
        const newObj ={...value};
        newObj[version]=arr
        setValue(newObj)
            if((value[version][value[version].length-1]).name.length !==0 && (checkVal || checkCons)){
                const arr = [...value[version]];
                arr.push({
                    id:uuidv4(),
                    name:''
                });
                const newObj ={...value};
                newObj[version]=arr
                setValue(newObj)
                if(version==='cons'){
                    setCheckCons(false)
                }else {setCheckVal(false)}

            }
            else {
                setCheckVal(true)
                setCheckCons(true)
            }
        if(arr[elemIndex].name.length===0){
            const arr = [...value[version]];
            const newArr =arr.filter(item=>item.id!==id);
            const newObj ={...value};
            newObj[version]=newArr
            setValue(newObj)
        }
    }
    return (
        <div className="container">
             <div className="card mt-2">
                 <div className="card-header bg-dark">
                     <h1 className="display-4 mb-2 text-center text-light">Should I eat at McDonalds?</h1>
                 </div>
                 <div className="card-body p-0">
                     <div className="row no-gutters">
                         <div className="col-6 border-right border-dark">
                             <ListItem types={value.value} headName="PROPS" version="value" handleChange={handleChange}/>
                         </div>
                         <div className="col-6">
                             <ListItem types={value.cons} headName="CONS" version="cons" handleChange={handleChange}/>
                         </div>
                     </div>
                 </div>
             </div>
        </div>
    );
};

export default Home;