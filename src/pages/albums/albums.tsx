import {
  View,
  Page,
  Navbar,
  Link,
  Panel,
  Block,
  Button,
  Popup,
  NavRight,
  BlockTitle,
  List,
  ListItem,
  Subnavbar,
  Searchbar,
  theme,
} from "framework7-react";
import { useEffect, useState } from "react";

type Album = {
  title: string;
};

export const Albums = ({ f7route }) => {
  const items: any[] = [];

  for (let i = 1; i <= 10000; i += 1) {
    items.push({
      title: `Item ${i}`,
      subtitle: `Subtitle ${i}`,
    });
  }
  const [vlData, setVlData] = useState<{ items: any[] }>({
    items: [],
  });

  const renderExternal = (vl, newData) => {
    setVlData({ ...newData });
  };

  return (
    <Page>
      <Navbar title="Virtual List">
        <Subnavbar inner={false}>
          <Searchbar
            searchContainer=".virtual-list"
            searchItem="li"
            searchIn=".item-title"
          />
        </Subnavbar>
      </Navbar>
      <Block>
        <p>
          Virtual List allows to render lists with huge amount of elements
          without loss of performance. And it is fully compatible with all
          Framework7 list components such as Search Bar, Infinite Scroll, Pull
          To Refresh, Swipeouts (swipe-to-delete) and Sortable.
        </p>
        <p>Here is the example of virtual list with 10 000 items:</p>
      </Block>
      <List
        strong
        outlineIos
        insetMd
        dividersIos
        className="searchbar-found"
        virtualList
        virtualListParams={{
          items,
          renderExternal,
          height: theme.ios ? 63 : theme.md ? 73 : 77,
        }}
      >
        <ul>
          {vlData.items.map((item, index) => (
            <ListItem
              key={index}
              mediaItem
              link={`/albums/${index}/`}
              title={item.title}
              subtitle={item.subtitle}
              style={{ top: `${vlData.topPosition}px` }}
              virtualListIndex={items.indexOf(item)}
            />
          ))}
        </ul>
      </List>
    </Page>
  );
};
