import {Skeleton} from '@uiw/react-native';
import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Layout, {Container} from '../../Layout';

const {Header, Body, Card, Footer} = Layout;

const App = (props: any) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<string[]>(['', '', '']);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    setLoading(true);
    setTimeout(() => {
      setData(['项目1', '项目2', '项目3']);
      setLoading(false);
    }, 3000);
  };
  const {route} = props;
  const description = route.params.description;
  const title = route.params.title;

  const skeletonStyles = [styles.item, styles.item, styles.item];

  return (
    <Container>
      <Layout>
        <Header title={title} description={description} />
        <Body style={{paddingLeft: 16, paddingRight: 16}}>
          <Card title="基础实例">
            <View style={styles.container}>
              {loading ? (
                <Skeleton loading={loading} styles={skeletonStyles} duration={1200} containerStyle={styles.list} />
              ) : (
                <View style={styles.list}>
                  {data.map((item, index) => (
                    <Text key={index} style={styles.item}>
                      {item}
                    </Text>
                  ))}
                </View>
              )}
              <TouchableOpacity style={styles.button} onPress={fetchData}>
                <Text style={styles.buttonText}>重新加载</Text>
              </TouchableOpacity>
            </View>
          </Card>
        </Body>
        <Footer />
      </Layout>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    width: '100%',
  },
  item: {
    backgroundColor: '#E1E9EE',
    height: 30,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
  },
});

export default App;
