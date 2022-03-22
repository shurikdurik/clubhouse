import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
//import { UserData } from '..';
//import { Api } from '../../api';
import { Header } from "../../components/Header";
import { Profile } from "../../components/Profile";
//import { wrapper } from '../../redux/store';
//import { checkAuth } from '../../utils/checkAuth';

/* interface ProfilePageProps {
  profileData: UserData | null;
} */

const ProfilePage: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <Header />
      <div className="container mt-30">
        <Profile
          avatarUrl={
            "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?cs=srgb&dl=pexels-suliman-sallehi-1704488.jpg&fm=jpg"
          }
          fullname={"Sasha Iatseniuk"}
          username={"shurik_durik"}
          about="Test info"
        />
      </div>
    </>
  );
};

export default ProfilePage;

/* export const getServerSideProps = wrapper.getServerSideProps(async (ctx) => {
  try {
    const user = await checkAuth(ctx);

    const userId = ctx.query.id;
    const profileData = await Api(ctx).getUserInfo(Number(userId));

    if (!user || !profileData) {
      throw new Error();
    }

    return {
      props: {
        profileData,
      },
    };
  } catch (error) {
    return {
      props: {},
      redirect: { permanent: false, destination: '/' },
    };
  }
});
 */
