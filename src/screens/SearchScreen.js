import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ResultsList from '../components/ResultsList';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    //price === '$' || '$$' || '$$$'
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <View>
      <SearchBar
        term={term}
        onTermSubmit={setTerm}
        onTermChange={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>we have found: {results.length}</Text>
      <ResultsList results={filterResultsByPrice('$')} title="Cost effective" />
      <ResultsList results={filterResultsByPrice('$$')} title="Bit Pricier" />
      <ResultsList results={filterResultsByPrice('$$$')} title="Big Spender" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
