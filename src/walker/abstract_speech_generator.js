// Copyright 2015 Volker Sorge
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


/**
 * @fileoverview Abstract speech generator that simply picks up the speech
 *     attribute.
 *
 * @author volker.sorge@gmail.com (Volker Sorge)
 */

goog.provide('sre.AbstractSpeechGenerator');

goog.require('sre.AuditoryDescription');
goog.require('sre.EnrichMathml');
goog.require('sre.SpeechGeneratorInterface');



/**
 * @constructor
 * @implements {sre.SpeechGeneratorInterface}
 */
sre.AbstractSpeechGenerator = function() { };


/**
 * @override
 */
sre.AbstractSpeechGenerator.prototype.getSpeech = goog.abstractMethod;


/**
 * @override
 */
sre.AbstractSpeechGenerator.prototype.start = function() { };


/**
 * @override
 */
sre.AbstractSpeechGenerator.prototype.end = function() { };


/**
 * Generates speech string for a sub tree of the xml element.
 * @param {!Node} node The target element of the event.
 * @param {!Element} xml The base xml element belonging to node.
 * @return {string} The generated speech string.
 */
sre.AbstractSpeechGenerator.prototype.generateSpeech = function(node, xml) {
  var rebuilt = new sre.RebuildStree(xml);
  var stree = rebuilt.getTree();
  var descrs = sre.EnrichMathml.computeSpeech(stree.xml());
  return sre.AuditoryDescription.speechString(descrs);
};
