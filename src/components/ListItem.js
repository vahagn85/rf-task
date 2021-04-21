import React from 'react';

const ListItem = (props) => {
    const {types,handleChange,headName,version} = props
    return (
        <React.Fragment>
            <h2 className="border-bottom border-dark text-center p-2 mb-0">{headName}</h2>
            <div className="p-3">
                {types.map((item,idx)=>{
                    return (
                        <div className="d-flex mb-2 align-items-center" key={item.id}>
                            <span className="mr-1">{idx+1}.</span>
                            <input
                                type="text"
                                name="cons"
                                className="form-control border-0"
                                onChange={handleChange(item.id,version)}
                                value={item.name}
                            />
                        </div>
                    )
                })}
            </div>
        </React.Fragment>
    );
};

export default ListItem;