import './styles.scss';
import {LINKS_ICON_MAP} from "../../Constants"

export default function ( link ) {
  const a = document.createElement("a");
  a.href = link;
  a.target = '_blank';

  const icon = document.createElement("span");
  const {hostname} = new URL(link);
  if (LINKS_ICON_MAP.has(hostname)) {
    icon.classList.add(...LINKS_ICON_MAP.get(hostname));
  } else {
    icon.classList.add('fab', 'default');
  }
  a.appendChild(icon);
  return a;
}