import React from "react";
import styled from "@emotion/styled";
import { fadeOut } from "../../utils/animations";
import { GalleryContainer } from "../shared/SharedContainers";

export const PlaceholderCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex-grow: 1;
  justify-content: center;
  align-items: flex-start;
  margin: 0;
  padding: 0;
  text-align: left;
  color: ${(props) => props.theme.primary};
  background-color: ${(props) => props.theme.secondary};
  padding-bottom: 2rem;
  animation: ${fadeOut} 2s ease-out;

  @media only screen and (min-width: 64rem) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 0.25rem;
    grid-column-gap: 2rem;
    align-items: start;
    grid-template-areas: "first second";
    align-content: start;
  }
`;

export const ColumnPlaceholder = styled.div`
  width: 100%;
  height: auto;
`;
export const FirstColumnPlaceholder = styled(ColumnPlaceholder)`
  grid-area: first;
`;
export const SecondColumnPlaceholder = styled(ColumnPlaceholder)`
  grid-area: second;
`;
export const PlaceholderContainer = styled(GalleryContainer)`
  animation: ${fadeOut} 3s ease-out;
`;
export const LoadingPlaceholderBlockBig = styled.div`
  width: 100%;
  height: 15rem;
  margin: 0.25rem;
  background-color: ${(props) => props.theme.primary};
  opacity: 0.1;
`;
export const LoadingPlaceholderBlockSmall = styled.div`
  width: 100%;
  height: 10rem;
  margin: 0.25rem;
  background-color: ${(props) => props.theme.primary};
  opacity: 0.1;
`;
export const TextPlaceholder = styled.div`
  width: 100%;
  min-height: 1.5rem;
  background-color: ${(props) => props.theme.primary};
  border-radius: 0.75rem;
  margin: 1rem 0 0 0;
  opacity: 0.1;
`;

export const ArticlePlaceholder = styled.div`
  display: flex;
  height: 45vh;
  width: 100%;
  background-color: ${(props) => props.theme.primary};
  opacity: 0.1;
  margin: 1rem 0.5rem 1rem 0;
  justify-content: center;
  align-items: center;
  padding: auto;
  border-radius: 0.75rem;

  @media only screen and (min-width: 48rem) {
    width: 100%;
    height: 37vh;
  }
`;

export function SkeletonNasaInfos() {
  return (
    <PlaceholderCard>
      <FirstColumnPlaceholder data-testid='first-coulumn-placeholder'>
        <TextPlaceholder data-testid='text-placeholder' />
        <ArticlePlaceholder data-testid='article-placeholder' />
        <TextPlaceholder data-testid='text-placeholder' />
        <TextPlaceholder data-testid='text-placeholder' />
        <TextPlaceholder data-testid='text-placeholder' />
        <TextPlaceholder data-testid='text-placeholder' />
      </FirstColumnPlaceholder>
      <SecondColumnPlaceholder data-testid='second-column-placeholder'>
        <TextPlaceholder data-testid='text-placeholder' />
        <TextPlaceholder data-testid='text-placeholder' />
        <TextPlaceholder data-testid='text-placeholder' />
        <TextPlaceholder data-testid='text-placeholder' />
        <TextPlaceholder data-testid='text-placeholder' />
        <TextPlaceholder data-testid='text-placeholder' />
        <TextPlaceholder data-testid='text-placeholder' />
        <TextPlaceholder data-testid='text-placeholder' />
        <TextPlaceholder data-testid='text-placeholder' />
        <TextPlaceholder data-testid='text-placeholder' />
        <TextPlaceholder data-testid='text-placeholder' />
        <TextPlaceholder data-testid='text-placeholder' />
        <TextPlaceholder data-testid='text-placeholder' />
      </SecondColumnPlaceholder>
    </PlaceholderCard>
  );
}

export function GallerySkeleton() {
  return (
    <PlaceholderContainer data-testid='placeholder-container'>
      <LoadingPlaceholderBlockBig data-testid='placeholder-block-big' />
      <LoadingPlaceholderBlockBig data-testid='placeholder-block-big' />
      <LoadingPlaceholderBlockBig data-testid='placeholder-block-big' />
      <LoadingPlaceholderBlockSmall data-testid='placeholder-block-small' />
      <LoadingPlaceholderBlockBig data-testid='placeholder-block-big' />
      <LoadingPlaceholderBlockBig data-testid='placeholder-block-big' />
      <LoadingPlaceholderBlockSmall data-testid='placeholder-block-small' />
      <LoadingPlaceholderBlockBig data-testid='placeholder-block-big' />
      <LoadingPlaceholderBlockSmall data-testid='placeholder-block-small' />
      <LoadingPlaceholderBlockBig data-testid='placeholder-block-big' />
    </PlaceholderContainer>
  );
}
