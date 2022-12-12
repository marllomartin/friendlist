import React, { useCallback, useEffect, useState } from 'react';
import { getFriendlist } from '../../services/api';
import { Container, SearchContainer, LoaderContainer, NotFound, CardContainer, InputGroup } from './styles';
import { HiSearch } from 'react-icons/hi';
import { MoonLoader } from 'react-spinners';
import Friendcard from '../Friendcard';

const TransactionsList: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [friendlist, setFriendlist] = useState<any>([]);
  const [search, setSearch] = useState<string>('');

  const [token] = useState(JSON.parse(sessionStorage.getItem('token') || '{}'));

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
        <InputGroup>
          <input
            type="text"
            value={search}
            placeholder="Digite um nome ou email"
            onChange={handleChangeSearch}
          />
          <HiSearch />
        </InputGroup>
      </SearchContainer>
      <Container>
        {loading ?
          <LoaderContainer>
            <MoonLoader color={'#606060'} />
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
                          username={friend.username}
                          name={friend.name}
                          email={friend.email.toLowerCase()}
                          phone={friend.phone}
                          city={friend.address.city}
                          website={friend.website}
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
