import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import MainLayout from "../MainLayout";
import ProfileHeader from "./ProfileHeader";
import ProfileIntro from "./ProfileIntro";
import ProfileCareer from "./ProfileCareer";

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 70px;
`;

const ProfileMain = styled.div`
  display: flex;
  gap: 30px;
`;

const Profile = React.forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <MainLayout ref={ref} order={2}>
      <ProfileContainer>
        <ProfileHeader />
        <ProfileMain>
          <ProfileIntro />
          <ProfileCareer />
        </ProfileMain>
      </ProfileContainer>
    </MainLayout>
  );
});

export default Profile;
