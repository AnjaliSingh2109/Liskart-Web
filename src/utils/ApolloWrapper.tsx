"use client";

import { ReactNode } from "react";

import { ApolloProvider } from "@apollo/client";

import client from "@graphql/apollo-client";

type ApolloWrapperProps = {
    children: ReactNode;
};

const ApolloWrapper = ({ children }: ApolloWrapperProps) => {
    return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloWrapper;
