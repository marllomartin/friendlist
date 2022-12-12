import React, { useCallback, useEffect, useState } from 'react';
import { getFriendlist } from '../../services/api';
import Friendcard from '../Friendcard';
import { Container, SearchContainer, LoaderContainer, NotFound, CardContainer } from './styles';

const TransactionsList: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [friendlist, setFriendlist] = useState<any>('');
  const [search, setSearch] = useState<any>('');

  const [token] = useState(JSON.parse(sessionStorage.getItem('token') || '{}'));

  console.log(token);

  const handleChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const loadFriendlist = useCallback(async () => {
    try {
      setLoading(true);
      await getFriendlist(token)
        .then((res) => {
          setLoading(false);
          setFriendlist(res.data);
        });
    } catch (error) {
      console.log(error);
    }
  }, [setFriendlist, setLoading, token]);

  useEffect(() => {
    loadFriendlist();
  }, [loadFriendlist]);

  return (
    <>
      <SearchContainer>
        <header>Procurar amigo</header>
        <input
          type="text"
          value={search}
          placeholder="digite o nome ou email do amigo"
          onChange={handleChangeSearch}
        />
      </SearchContainer>
      <Container>
        {loading ?
          <LoaderContainer>
            {/* <ClockLoader color={'black'} /> */}
          </LoaderContainer>
          :
          <>
            {friendlist.length === 0 ?
              <NotFound>
                <p>{'Você ainda não tem nenhum amigo :('}</p>
              </NotFound> :
              <CardContainer>
                {
                  friendlist
                    .filter((friend: any) => (
                      friend.name.toLowerCase().includes(search) ||
                      friend.email.toLowerCase().includes(search)
                    ))
                    .map((friend: any) => {
                      return (
                        <Friendcard
                          key={friend.id}
                          name={friend.name}
                          email={friend.email}
                          phone={friend.phone}
                        />
                      );
                    })
                }
              </CardContainer>
            }
          </>
        }
      </Container>
    </>
  );
};

export default TransactionsList;
