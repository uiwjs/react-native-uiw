import React from 'react';
import {ImagePicker} from '@uiw/react-native-image-picker';
import Layout, {Container} from '../../Layout';
import {ComProps} from '../../routes';

const {Header, Body, Card, Footer} = Layout;

export interface ImagePickerProps extends ComProps {}

interface fileProps {
  fileName: string;
  fileType: string;
  uri: string;
  fileSize?: number;
}

export default function MenuDropdownView(props: ImagePickerProps) {
  const {route} = props || {};
  const description = route.params.description;
  const title = route.params.title;
  return (
    <Container>
      <Layout>
        <Header title={title} description={description} />
        <Body>
          <Card title="基础实例">
            <ImagePicker
              upload={(file: fileProps[]) => {
                let imageList: string[] = [];
                file.forEach(file => imageList.push(file.uri));
                return imageList;
              }}
              selectionLimit={2}
            />
          </Card>
        </Body>
        <Footer />
      </Layout>
    </Container>
  );
}
