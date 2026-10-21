import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { api } from '../../../api';
import { Button } from 'ui';

export const CVEditor = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [cv, setCv] = useState<any>(null);
  const [structuredData, setStructuredData] = useState<any>({});
  const timeoutRef = useRef<any>(null);

  useEffect(() => {
    api.get(`/cvs/${id}`).then(res => {
      setCv(res.data);
      setStructuredData(res.data.structuredData);
    });
  }, [id]);

  const saveChanges = async (newData: any) => {
    try {
      await api.patch(`/cvs/${id}`, { structuredData: newData });
    } catch (e) {
      console.error(e);
    }
  };

  const handleDataChange = (key: string, value: any) => {
    const newData = { ...structuredData, [key]: value };
    setStructuredData(newData);

    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      saveChanges(newData);
    }, 1000); // Autosave debounce
  };

  const addExperience = () => {
    const exps = structuredData.experience || [];
    handleDataChange('experience', [...exps, { company: '', title: '', dates: '', description: '' }]);
  };

  const updateExperience = (index: number, key: string, value: string) => {
    const exps = [...(structuredData.experience || [])];
    exps[index][key] = value;
    handleDataChange('experience', exps);
  };

  const removeExperience = (index: number) => {
    const exps = [...(structuredData.experience || [])];
    exps.splice(index, 1);
    handleDataChange('experience', exps);
  };

  const addEducation = () => {
    const edus = structuredData.education || [];
    handleDataChange('education', [...edus, { institution: '', degree: '', dates: '' }]);
  };

  const updateEducation = (index: number, key: string, value: string) => {
    const edus = [...(structuredData.education || [])];
    edus[index][key] = value;
    handleDataChange('education', edus);
  };

  const removeEducation = (index: number) => {
    const edus = [...(structuredData.education || [])];
    edus.splice(index, 1);
    handleDataChange('education', edus);
  };

  const addSkill = () => {
    const skills = structuredData.skills || [];
    handleDataChange('skills', [...skills, '']);
  };

  const updateSkill = (index: number, value: string) => {
    const skills = [...(structuredData.skills || [])];
    skills[index] = value;
    handleDataChange('skills', skills);
  };

  const removeSkill = (index: number) => {
    const skills = [...(structuredData.skills || [])];
    skills.splice(index, 1);
    handleDataChange('skills', skills);
  };

  if (!cv) return <div className="p-8">Loading...</div>;

  return (
    <div className="p-8 max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
      {/* Editor Side */}
      <div className="flex-1 bg-white p-6 rounded-lg shadow-sm border border-gray-200 h-[800px] overflow-y-auto">
        <div className="flex justify-between mb-4 items-center">
          <h2 className="text-xl font-bold">Edit CV</h2>
          <div className="flex gap-2">
            <Button variant="secondary" onClick={() => navigate(`/dashboard/cv-builder/${id}/templates`)}>Template</Button>
            <Button variant="secondary" onClick={() => navigate(`/dashboard/cv-builder/${id}/export`)}>Export</Button>
          </div>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Full Name</label>
              <input
                type="text"
                className="w-full border rounded px-3 py-2"
                value={structuredData.fullName || ''}
                onChange={e => handleDataChange('fullName', e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                className="w-full border rounded px-3 py-2"
                value={structuredData.email || ''}
                onChange={e => handleDataChange('email', e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Phone</label>
              <input
                type="text"
                className="w-full border rounded px-3 py-2"
                value={structuredData.phone || ''}
                onChange={e => handleDataChange('phone', e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Location</label>
              <input
                type="text"
                className="w-full border rounded px-3 py-2"
                value={structuredData.location || ''}
                onChange={e => handleDataChange('location', e.target.value)}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Professional Summary</label>
            <textarea
              className="w-full border rounded px-3 py-2"
              rows={4}
              value={structuredData.summary || ''}
              onChange={e => handleDataChange('summary', e.target.value)}
            />
          </div>

          <div className="border-t pt-4">
            <div className="flex justify-between items-center mb-2">
              <label className="block text-sm font-medium">Work Experience</label>
              <button onClick={addExperience} className="text-sm text-blue-600">+ Add</button>
            </div>
            {(structuredData.experience || []).map((exp: any, idx: number) => (
              <div key={idx} className="bg-gray-50 p-4 rounded-md mb-4 border relative">
                <button onClick={() => removeExperience(idx)} className="absolute top-2 right-2 text-red-500 text-sm">Remove</button>
                <input
                  type="text"
                  placeholder="Company Name"
                  className="w-full border rounded px-3 py-2 mb-2 mt-2"
                  value={exp.company}
                  onChange={e => updateExperience(idx, 'company', e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Job Title"
                  className="w-full border rounded px-3 py-2 mb-2"
                  value={exp.title}
                  onChange={e => updateExperience(idx, 'title', e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Dates (e.g. Jan 2020 - Present)"
                  className="w-full border rounded px-3 py-2 mb-2"
                  value={exp.dates}
                  onChange={e => updateExperience(idx, 'dates', e.target.value)}
                />
                <textarea
                  placeholder="Description / Responsibilities"
                  className="w-full border rounded px-3 py-2"
                  rows={3}
                  value={exp.description}
                  onChange={e => updateExperience(idx, 'description', e.target.value)}
                />
              </div>
            ))}
          </div>

          <div className="border-t pt-4">
            <div className="flex justify-between items-center mb-2">
              <label className="block text-sm font-medium">Education</label>
              <button onClick={addEducation} className="text-sm text-blue-600">+ Add</button>
            </div>
            {(structuredData.education || []).map((edu: any, idx: number) => (
              <div key={idx} className="bg-gray-50 p-4 rounded-md mb-4 border relative">
                <button onClick={() => removeEducation(idx)} className="absolute top-2 right-2 text-red-500 text-sm">Remove</button>
                <input
                  type="text"
                  placeholder="Institution"
                  className="w-full border rounded px-3 py-2 mb-2 mt-2"
                  value={edu.institution}
                  onChange={e => updateEducation(idx, 'institution', e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Degree"
                  className="w-full border rounded px-3 py-2 mb-2"
                  value={edu.degree}
                  onChange={e => updateEducation(idx, 'degree', e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Dates (e.g. 2016 - 2020)"
                  className="w-full border rounded px-3 py-2 mb-2"
                  value={edu.dates}
                  onChange={e => updateEducation(idx, 'dates', e.target.value)}
                />
              </div>
            ))}
          </div>

          <div className="border-t pt-4">
            <div className="flex justify-between items-center mb-2">
              <label className="block text-sm font-medium">Skills</label>
              <button onClick={addSkill} className="text-sm text-blue-600">+ Add</button>
            </div>
            <div className="flex flex-wrap gap-2">
              {(structuredData.skills || []).map((skill: string, idx: number) => (
                <div key={idx} className="flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="Skill"
                    className="border rounded px-3 py-1 w-32"
                    value={skill}
                    onChange={e => updateSkill(idx, e.target.value)}
                  />
                  <button onClick={() => removeSkill(idx)} className="text-red-500 text-sm font-bold">×</button>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Live Preview Side */}
      <div className="flex-1 bg-gray-100 p-6 rounded-lg shadow-sm border border-gray-200 h-[800px] overflow-y-auto">
        <h3 className="text-lg font-medium text-gray-500 mb-4">Live Preview ({cv.templateId})</h3>
        <div className={`bg-white w-full shadow-md p-8 border border-gray-300 min-h-full ${cv.templateId === 'modern' ? 'font-sans' : cv.templateId === 'minimal' ? 'font-mono text-sm' : 'font-serif'}`}>
          {cv.templateId === 'modern' ? (
            <div className="border-l-4 border-blue-600 pl-4">
               <h1 className="text-4xl font-black mb-1 text-blue-900">{structuredData.fullName || 'Your Name'}</h1>
               <div className="text-sm text-blue-700 font-medium mb-6 space-x-2">
                 <span>{structuredData.email}</span>
                 {structuredData.email && structuredData.phone && <span>|</span>}
                 <span>{structuredData.phone}</span>
                 {(structuredData.email || structuredData.phone) && structuredData.location && <span>|</span>}
                 <span>{structuredData.location}</span>
               </div>

               {structuredData.summary && <p className="text-gray-800 mb-6 border-b pb-4">{structuredData.summary}</p>}

               {(structuredData.experience && structuredData.experience.length > 0) && (
                 <>
                   <h2 className="text-xl font-bold text-blue-800 uppercase tracking-wider mb-4">Experience</h2>
                   {structuredData.experience.map((exp: any, i: number) => (
                     <div key={i} className="mb-4">
                       <div className="flex justify-between items-baseline">
                         <h3 className="font-bold text-lg text-gray-900">{exp.title}</h3>
                         <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded">{exp.dates}</span>
                       </div>
                       <div className="text-md text-gray-700 font-medium mb-1">{exp.company}</div>
                       <div className="text-gray-600 whitespace-pre-wrap">{exp.description}</div>
                     </div>
                   ))}
                 </>
               )}

               {(structuredData.education && structuredData.education.length > 0) && (
                 <>
                   <h2 className="text-xl font-bold text-blue-800 uppercase tracking-wider mb-4 mt-6">Education</h2>
                   {structuredData.education.map((edu: any, i: number) => (
                     <div key={i} className="mb-4 flex justify-between items-baseline">
                       <div>
                         <h3 className="font-bold text-lg text-gray-900">{edu.degree}</h3>
                         <div className="text-gray-700">{edu.institution}</div>
                       </div>
                       <span className="text-sm font-semibold text-blue-600">{edu.dates}</span>
                     </div>
                   ))}
                 </>
               )}

               {(structuredData.skills && structuredData.skills.length > 0) && (
                 <>
                   <h2 className="text-xl font-bold text-blue-800 uppercase tracking-wider mb-4 mt-6">Skills</h2>
                   <div className="flex flex-wrap gap-2">
                     {structuredData.skills.map((skill: string, i: number) => (
                       <span key={i} className="bg-blue-100 px-3 py-1 rounded-full text-sm text-blue-800 font-medium">{skill}</span>
                     ))}
                   </div>
                 </>
               )}
            </div>
          ) : cv.templateId === 'minimal' ? (
            <div>
               <h1 className="text-2xl font-bold mb-1 uppercase tracking-widest">{structuredData.fullName || 'Your Name'}</h1>
               <div className="text-xs text-gray-500 mb-6 space-x-2 uppercase">
                 <span>{structuredData.email}</span>
                 {structuredData.email && structuredData.phone && <span>/</span>}
                 <span>{structuredData.phone}</span>
                 {(structuredData.email || structuredData.phone) && structuredData.location && <span>/</span>}
                 <span>{structuredData.location}</span>
               </div>

               {structuredData.summary && <p className="text-gray-700 mb-8 leading-relaxed">{structuredData.summary}</p>}

               {(structuredData.experience && structuredData.experience.length > 0) && (
                 <div className="mb-8">
                   <h2 className="text-sm font-bold uppercase tracking-widest border-b border-black pb-1 mb-4">Experience</h2>
                   {structuredData.experience.map((exp: any, i: number) => (
                     <div key={i} className="mb-4">
                       <div className="flex justify-between items-baseline">
                         <h3 className="font-bold text-gray-900">{exp.title} // {exp.company}</h3>
                         <span className="text-xs text-gray-500">{exp.dates}</span>
                       </div>
                       <div className="text-gray-600 whitespace-pre-wrap mt-1">{exp.description}</div>
                     </div>
                   ))}
                 </div>
               )}

               {(structuredData.education && structuredData.education.length > 0) && (
                 <div className="mb-8">
                   <h2 className="text-sm font-bold uppercase tracking-widest border-b border-black pb-1 mb-4">Education</h2>
                   {structuredData.education.map((edu: any, i: number) => (
                     <div key={i} className="mb-2 flex justify-between items-baseline">
                       <div>
                         <span className="font-bold text-gray-900">{edu.degree}</span> - <span className="text-gray-700">{edu.institution}</span>
                       </div>
                       <span className="text-xs text-gray-500">{edu.dates}</span>
                     </div>
                   ))}
                 </div>
               )}

               {(structuredData.skills && structuredData.skills.length > 0) && (
                 <div>
                   <h2 className="text-sm font-bold uppercase tracking-widest border-b border-black pb-1 mb-4">Skills</h2>
                   <div className="text-gray-700">
                     {structuredData.skills.join(', ')}
                   </div>
                 </div>
               )}
            </div>
          ) : (
            <div>
               <h1 className="text-3xl font-bold mb-1 text-center">{structuredData.fullName || 'Your Name'}</h1>
               <div className="text-sm text-gray-600 mb-6 space-x-2 text-center">
                 <span>{structuredData.email}</span>
                 {structuredData.email && structuredData.phone && <span>|</span>}
                 <span>{structuredData.phone}</span>
                 {(structuredData.email || structuredData.phone) && structuredData.location && <span>|</span>}
                 <span>{structuredData.location}</span>
               </div>

               {structuredData.summary && <p className="text-gray-800 mb-6 text-justify">{structuredData.summary}</p>}

               {(structuredData.experience && structuredData.experience.length > 0) && (
                 <>
                   <h2 className="text-xl font-bold border-b pb-2 mb-4">Experience</h2>
                   {structuredData.experience.map((exp: any, i: number) => (
                     <div key={i} className="mb-4">
                       <div className="flex justify-between items-baseline">
                         <h3 className="font-bold text-lg">{exp.title}</h3>
                         <span className="text-sm text-gray-500">{exp.dates}</span>
                       </div>
                       <div className="text-md text-gray-700 font-medium mb-1">{exp.company}</div>
                       <div className="text-gray-600 whitespace-pre-wrap">{exp.description}</div>
                     </div>
                   ))}
                 </>
               )}

               {(structuredData.education && structuredData.education.length > 0) && (
                 <>
                   <h2 className="text-xl font-bold border-b pb-2 mb-4 mt-6">Education</h2>
                   {structuredData.education.map((edu: any, i: number) => (
                     <div key={i} className="mb-4 flex justify-between items-baseline">
                       <div>
                         <h3 className="font-bold text-lg">{edu.degree}</h3>
                         <div className="text-gray-700">{edu.institution}</div>
                       </div>
                       <span className="text-sm text-gray-500">{edu.dates}</span>
                     </div>
                   ))}
                 </>
               )}

               {(structuredData.skills && structuredData.skills.length > 0) && (
                 <>
                   <h2 className="text-xl font-bold border-b pb-2 mb-4 mt-6">Skills</h2>
                   <div className="flex flex-wrap gap-2">
                     {structuredData.skills.map((skill: string, i: number) => (
                       <span key={i} className="bg-gray-200 px-2 py-1 rounded text-sm text-gray-800">{skill}</span>
                     ))}
                   </div>
                 </>
               )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};