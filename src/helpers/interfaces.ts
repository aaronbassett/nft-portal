import { ChainThemes, ChainTitles, MintTypes, ModalStatusTypes, StatusMessages, StatusTypes } from './constants';

export interface CommonStyleProps {
  className?: string;
  isDisabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}
export interface CollectionMetadata extends CollectionMetadataData {
  id: string;
}

export interface CollectionMetadataData {
  name: string;
  description?: string;
  image?: string;
}

export interface NftMetadata extends NftMetadataData {
  id: string;
}

export interface NftMetadataData {
  name: string;
  description?: string;
  image?: string;
}

export interface ActiveAccount {
  wallet: string;
  account: string;
}

export interface Chain {
  url: string;
  title: ChainTitles;
  theme: ChainThemes;
}

export interface Themeable {
  activeTheme: ThemeStyle;
}

export interface ThemeStyle {
  blockBackgroundColorHover: string;
  bodyBackground: string;
  borderRadius: string;
  buttonBackgroundColor: string;
  buttonBorderColor: string;
  buttonBorderColorHover: string;
  buttonTextColor: string;
  buttonTextColorHover: string;
  closeButtonBackgroundColor: string;
  closeButtonVariant: string | undefined;
  defaultTextColor: string;
  logoTextColor: string;
  menuButtonBackgroundColor: string;
  menuButtonTextColor: string;
  menuButtonBorderColor: string;
  menuButtonActiveBackgroundColor: string;
  menuButtonActiveTextColor: string;
  menuButtonActiveBorderColor: string;
  transparentHoverHighlight: string;
}

export interface StatusEntry {
  type: ModalStatusTypes;
  message: StatusMessages;
}

export interface CollectionConfig {
  settings: number;
  maxSupply?: number;
  mintSettings: {
    mintType: MintType;
    price?: number;
    startBlock?: number;
    endBlock?: number;
    defaultItemSettings: number;
  };
}

export type MintType = MintTypes | { [key in MintTypes]?: string };

export interface ContextualStatusMessage {
  statusType: StatusTypes;
  statusMessage: string;
}

// TODO owner_of_item will also be changed soon to 'nft_owned'
export interface MintAccessNft {
  owner_of_item: string;
}
