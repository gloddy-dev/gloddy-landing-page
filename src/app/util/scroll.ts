export const scrollToMeeting = (id: string) => {
  // 현재 해시가 목표 해시와 같은 경우
  if (window.location.hash === id) {
    // 임시로 해시를 변경
    window.location.hash = '#';

    // 브라우저가 URL 변경을 처리할 시간을 주기 위해 setTimeout 사용
    setTimeout(() => {
      // 원하는 해시로 다시 설정
      window.location.hash = id;
    }, 10); // 매우 짧은 지연 시간
  } else {
    // 다른 경우, 직접 해시 설정
    window.location.hash = id;
  }
};
