import React from 'react';

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={props.profilePage.posts}
      newPostText={props.profilePage.newPostText}
      updateNewPostText={props.updateNewPostText}
      addPost={props.addPost} />
    </div>
  )
}

export default Profile;