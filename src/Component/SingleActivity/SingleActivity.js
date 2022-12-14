import React from 'react';

const SingleActivity = (props) => {

    const { addToList, gym } = props;

    const { name, img, time, id } = gym;
    return (
        <div>

            <div className="card  bg-base-100 shadow-xl">
                <figure><img className='h-44' src={img} alt=" Nophoto" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Name: {name}
                    </h2>
                    <h4 className='font-bold'>Time: {time} min </h4>
                    <button onClick={() => addToList(gym)} className="btn btn-active btn-primary ">Add to Course</button>
                </div>
            </div>
        </div>
    );
};

export default SingleActivity;