import Messages from '@/components/messages';
import { getMessages } from '@/lib/messages';
import { unstable_noStore } from 'next/cache';

// nextjs 예약어

 /*
 이런식으로 상수명, 값을 초기화하면 캐싱처리한다.
 export const revalidate = 5;
 */

 /*
캐시 사용안함 cache: 'no-store'와 같은 동작을 한다.
export const dynamic = 'force-dynamic'
*/

export default async function MessagesPage() {
   /*
  캐시 사용안함 
  함수 안에 존재해야함.
  unstable_noStore();
  */

  const response = await fetch('http://localhost:8080/messages', 
     /*
    cache: 'no-store' // 캐시 사용안함
    next: {
      revalidate: nextJs가 캐시 데이터를 재사용해야 할 초
      revalidate: 5는 캐시된 데이터를 5초동안 재사용하라고 지시
      revalidate: 5 

      특정 캐시 태그에 대해 필요에 따라 캐시된 데이터를 무효화할 수 있게 해준다.
      이렇게 태그값을 설정한 후 new폴더의 page.js를보면 revalidateTag('msg')가 있는데 
      revalidateTag()메서드를 가지고 있는 함수가 실행이 되면 태그값을 msg로 한 페이지의 캐시를 제거한다.
      tags: ['msg'], 
    }
    */
);
  // const messages = await response.json();
  const messages = await getMessages();

  if (!messages || messages.length === 0) {
    return <p>No messages found</p>;
  }

  return <Messages messages={messages} />;
}
