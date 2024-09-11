import {useTranslations} from 'next-intl';
import Link from 'next/link';
 
export default function NavigationComponent() {
    const t = useTranslations('Navigation');
 
  return (
    <div> 
        <ul>
            <li><Link href="/en">{t('english')}</Link> </li>
            <li><Link href="/hi">{t('hindi')}</Link> </li>
        </ul>
    </div>
  )
}
