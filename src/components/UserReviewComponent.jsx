import React from 'react';

const UserReviewComponent = ({ review }) => {
  const { name, profilePicture, text,city } = review;

  return (
    <div className="user-review-container lg:w[19%] h-100 mb-4 ">
      <div className="review-text text-center mr-4">
        <p className='text-3xl lg:text-xs'>"{text}"</p>
      </div>  
      <div className="user-profile">
        <img src={profilePicture} alt={`${name}'s profile`} className="profile-picture block my-4 mx-auto rounded-full h-16 " />
        <h4 className="user-name text-center my-2 font-bold text-black">{name}</h4>
        <h4 className="user-name text-center">{city}</h4>
      </div>
      
    </div>
  );
};

const userReviewStyle = {
  userReviewContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    backgroundColor: '#f9f9f9',
    width: '50%',
    margin: '0 auto',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  },
  userProfile: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '20px',
  },
  profilePicture: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '10px',
  },
  userName: {
    margin: 0,
    fontWeight: 'bold',
    color: '#333',
  },
  reviewText: {
    textAlign: 'center',
    margin: 0,
  },
};

export default UserReviewComponent;