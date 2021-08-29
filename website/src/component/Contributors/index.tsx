import styles from './index.module.less';
import { useFetch } from '../../hook/useFetch';

type ContributorsProps = {
  path?: string;
};

export default function Contributors(props: ContributorsProps) {
  const { path } = props;
  if (!path) return null;
  let editPath = path;
  if (!/^(https?:\/\/)/.test(editPath)) {
    editPath = `https://github.com/uiwjs/react-native-uiw/edit/master/${path.replace(/^\//, '')}`;
  }
  return (
    <div className={styles.warpper}>
      <a className={styles.edit} href={editPath} target="__blank">
        <svg viewBox="0 0 1024 1024" width="14" height="14" fill="#757575">
          <path d="M837.818182 0H186.181818C134.981818 0 93.090909 41.890909 93.090909 93.090909v837.818182c0 51.2 41.890909 93.090909 93.090909 93.090909h651.636364c51.2 0 93.090909-41.890909 93.090909-93.090909V93.090909c0-51.2-41.890909-93.090909-93.090909-93.090909z m46.545454 912.290909c0 37.236364-27.927273 65.163636-65.163636 65.163636H204.8c-37.236364 0-65.163636-27.927273-65.163636-65.163636V111.709091C139.636364 74.472727 167.563636 46.545455 204.8 46.545455h614.4c37.236364 0 65.163636 27.927273 65.163636 65.163636v800.581818z" />
          <path d="M256 139.636364h418.909091c13.963636 0 23.272727 9.309091 23.272727 23.272727s-9.309091 23.272727-23.272727 23.272727h-418.909091c-13.963636 0-23.272727-9.309091-23.272727-23.272727s9.309091-23.272727 23.272727-23.272727zM256 279.272727h279.272727c13.963636 0 23.272727 9.309091 23.272728 23.272728s-9.309091 23.272727-23.272728 23.272727h-279.272727c-13.963636 0-23.272727-9.309091-23.272727-23.272727s9.309091-23.272727 23.272727-23.272728zM256 418.909091h139.636364c13.963636 0 23.272727 9.309091 23.272727 23.272727s-9.309091 23.272727-23.272727 23.272727h-139.636364c-13.963636 0-23.272727-9.309091-23.272727-23.272727s9.309091-23.272727 23.272727-23.272727z" />
          <path d="M256 581.818182m-23.272727 0a23.272727 23.272727 0 1 0 46.545454 0 23.272727 23.272727 0 1 0-46.545454 0Z" />
          <path d="M721.454545 558.545455h46.545455c13.963636 0 23.272727 9.309091 23.272727 23.272727s-9.309091 23.272727-23.272727 23.272727h-46.545455c-13.963636 0-23.272727-9.309091-23.272727-23.272727s9.309091-23.272727 23.272727-23.272727z" />
          <path d="M404.945455 768l-102.4-97.745455L781.963636 190.836364c27.927273-27.927273 69.818182-27.927273 97.745455 0s27.927273 69.818182 0 97.745454" />
          <path d="M339.781818 833.163636l-116.363636 18.618182 18.618182-116.363636 32.581818-32.581818L372.363636 800.581818" />
        </svg>
        在 GitHub 上编辑此页
      </a>
      <AvatarList path={path} />
    </div>
  );
}

type Response = Array<{
  username: string;
  url: string;
}>;

function AvatarList(props: { path: string }) {
  const { path } = props;
  const fetchurl = `https://proapi.azurewebsites.net/doc/getAvatarList?filename=${path.replace(
    /^\//,
    '',
  )}&owner=uiwjs&repo=react-native-uiw`;
  const res = useFetch<Response>(fetchurl);
  if (!res.response) {
    return <span className={styles.avatar} />;
  }
  return (
    <span className={styles.avatar}>
      {res.response.map((item, idx) => {
        return (
          <a href={`https://github.com/${item.username}`} key={idx} target="__blank">
            <img src={item.url} alt={item.username} />
          </a>
        );
      })}
    </span>
  );
}
