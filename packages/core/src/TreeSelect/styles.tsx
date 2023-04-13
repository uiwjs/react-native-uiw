import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  item: {
    minHeight: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  active_first_item: {
    backgroundColor: '#fff',
  },
  not_active_first_item: {
    backgroundColor: '#f6f7f9',
  },
  active_nth_item: {
    backgroundColor: '#fef4f3',
    borderWidth: 1,
    borderRadius: 5,
    marginLeft: 10,
    marginBottom: 10,
  },
  not_active_nth_item: {
    backgroundColor: '#f6f7f9',
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 5,
    marginLeft: 10,
    marginBottom: 10,
  },
  content: {
    flexDirection: 'row',
    height: 35,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 5,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  disabled: {
    flexDirection: 'row',
    height: 35,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 5,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 16,
  },
  contentTitle: {
    fontSize: 16,
    color: 'black',
  },
});
