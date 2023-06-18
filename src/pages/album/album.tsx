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

export const Album = ({ f7router }) => {
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
      <Button onClick={() => f7router.back()}>Album</Button>
    </Page>
  );
};
