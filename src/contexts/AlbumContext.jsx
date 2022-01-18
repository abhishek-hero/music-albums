import { createContext, useState } from "react";

export const AlbumContext = createContext();

export const AlbumContextProvider = ({ children }) => {
  const [albums, setAlbums] = useState("");

  const handleAlbums = (data) => {
    setAlbums(data);
  };
  
  return (
    <AlbumContext.Provider value={{ albums, handleAlbums }}>
      {children}
    </AlbumContext.Provider>
  );
};
