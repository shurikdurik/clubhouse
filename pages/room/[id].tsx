import React from "react";
//import { Api } from '../../api';
import { BackButton } from "../../components/BackButton";
import { Header } from "../../components/Header";
import { Room } from "../../components/Room";
import { Axios } from "../../core/axios";
//import { wrapper } from '../../redux/store';
//import { checkAuth } from '../../utils/checkAuth';

export default function RoomPage({ room }) {
  console.log(room);

  return (
    <>
      <Header />
      <div className="container mt-40">
        <BackButton title="All rooms" href="/rooms" />
      </div>
      <Room title={room.title} />
    </>
  );
}

export const getServerSideProps = async (ctx) => {
  const { id } = ctx.query;
  try {
    const { data } = await Axios.get("/rooms.json");
    const room = data.find((el) => el.id === id);
    return {
      props: {
        room,
      },
    };
  } catch (err) {
    return {
      props: {
        room: {},
      },
    };
  }
};

/* export const getServerSideProps = wrapper.getServerSideProps(async (ctx) => {
  try {
    const user = await checkAuth(ctx);

    if (!user) {
      return {
        props: {},
        redirect: {
          permanent: false,
          destination: '/',
        },
      };
    }

    const roomId = ctx.query.id;
    const room = await Api(ctx).getRoom(roomId as string);

    return {
      props: {
        room,
      },
    };
  } catch (error) {
    console.log('ERROR!');
    return {
      props: {},
      redirect: {
        destination: '/rooms',
        permanent: false,
      },
    };
  }
}); */
