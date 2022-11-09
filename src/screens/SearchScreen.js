import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'san jose'
        }
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage('something went wrong');
    }
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
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
