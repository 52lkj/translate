var btn=document.getElementById('buttonProcess');
btn.onclick=saveLanguage;
function saveLanguage() {
  const selectedLanguage = document.getElementById("languageSelect").value;
  //����ѡ���Դ洢�� localStorage ��ͨ����չ�������Ϣ���ݻ��Ʒ��͵���̨�ű�
  localStorage.setItem("selectedLanguage", selectedLanguage);
  window.close();
}

