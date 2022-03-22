import React from "react";
import Link from "next/link";
import Head from "next/head";
import { Header } from "../components/Header";
import { Button } from "../components/Button";
import { StartRoomModal } from "../components/StartRoomModal";
import { ConversationCard } from "../components/ConversationCard";
import { Axios } from "../core/axios";

export default function Rooms({ rooms }) {
  const [visibleModal, setVisibleModal] = React.useState(false);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Clubhouse: Drop-in audio chat</title>
      </Head>
      <Header />
      <div className="container">
        <div className=" mt-40 d-flex align-items-center justify-content-between">
          <h1>All conversations</h1>
          <Button onClick={() => setVisibleModal(true)} color="green">
            + Start room
          </Button>
        </div>
        {visibleModal && (
          <StartRoomModal onClose={() => setVisibleModal(false)} />
        )}
        <div className="grid mt-30">
          {rooms.map((room) => (
            <Link key={room.id} href={`/room/${room.id}`}>
              <a>
                <ConversationCard
                  title={room.title}
                  speakers={[
                    {
                      avatarUrl:
                        "https://images.news18.com/ibnlive/uploads/2021/06/1622715559_disha.jpg?impolicy=website&width=510&height=356",
                      id: 22,
                      fullname: "Sasha Iats",
                      isActive: 2,
                      phone: "+7888888888",
                      username: "shurik",
                    },
                    {
                      avatarUrl:
                        "https://pressgazette.co.uk/wp-content/uploads/2020/11/shutterstock.jpg",
                      id: 23,
                      fullname: "Alla Iats",
                      isActive: 2,
                      phone: "+7888888888",
                      username: "shurik",
                    },
                  ]}
                  listenersCount={room.guestsCount}
                />
              </a>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export const getServerSideProps = async () => {
  try {
    const { data } = await Axios.get("/rooms.json");
    return {
      props: {
        rooms: [...data],
      },
    };
  } catch (err) {
    return {
      props: {
        rooms: [],
      },
    };
  }
};
